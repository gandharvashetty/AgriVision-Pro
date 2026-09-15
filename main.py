from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import json
import tensorflow as tf
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# This loads your new model file automatically
MODEL = tf.keras.models.load_model("plant_disease_model.keras")

# This loads your new 38 classes automatically
with open("class_names.json", "r") as f:
    CLASS_NAMES = json.load(f)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image_bytes = await file.read()
    
    try:
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    except Exception:
        return {"class": "Invalid_Image", "confidence": 0.0}

    # Resize image for your new model
    image = image.resize((224, 224))
    img_array = tf.keras.utils.img_to_array(image)
    img_array = np.expand_dims(img_array, 0)
    
    predictions = MODEL.predict(img_array)
    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = float(np.max(predictions[0]))
    
    return {
        "class": predicted_class,
        "confidence": round(confidence * 100, 2)
    }