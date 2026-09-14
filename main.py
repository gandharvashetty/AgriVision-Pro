from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
from PIL import Image
import numpy as np
import io

# 1. Initialize the FastAPI application
app = FastAPI()

# Enable CORS so our React frontend can talk to this API later
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. Load the trained model you downloaded
MODEL = tf.keras.models.load_model("plant_disease_model.keras")

# 3. List the 15 class labels (or categories) recognized by your model
# (Adjust/update these strings if your specific dataset had custom folder names)
CLASS_NAMES = [
    'Pepper__bell___Bacterial_spot', 'Pepper__bell___healthy', 'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 'Tomato_Bacterial_spot', 'Tomato_Early_blight', 'Tomato_Late_blight', 'Tomato_Leaf_Mold', 'Tomato_Septoria_leaf_spot', 'Tomato_Spider_mites_Two_spotted_spider_mite', 'Tomato__Target_Spot', 'Tomato__Tomato_YellowLeaf__Curl_Virus', 'Tomato__Tomato_mosaic_virus', 'Tomato_healthy'
]

def preprocess_image(data) -> np.ndarray:
    """Resize and prepare uploaded image for prediction."""
    image = Image.open(io.BytesIO(data)).convert("RGB")
    image = image.resize((224, 224))
    image_array = np.array(image) 
    return np.expand_dims(image_array, axis=0)

@app.get("/")
def home():
    return {"message": "Plant Disease Diagnostic API is up and running!"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image_bytes = await file.read()
    processed_img = preprocess_image(image_bytes)
    
    # Run prediction
    predictions = MODEL.predict(processed_img)
    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = float(np.max(predictions[0]))
    
    # SAFETY GATE: If confidence is below 65%, it's likely not a valid plant leaf
    if confidence < 0.65:
        return {
            "class": "Invalid_Image",
            "confidence": round(confidence * 100, 2)
        }
    
    return {
        "class": predicted_class,
        "confidence": round(confidence * 100, 2)
    }