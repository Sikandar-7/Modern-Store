from PIL import Image, ImageDraw, ImageOps
import os

def make_circle(input_path, output_paths):
    try:
        # Open the image
        img = Image.open(input_path).convert("RGBA")
        
        # Create a circular mask
        mask = Image.new("L", img.size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0) + img.size, fill=255)
        
        # Apply the mask
        output = ImageOps.fit(img, mask.size, centering=(0.5, 0.5))
        output.putalpha(mask)
        
        # Save to all output paths
        for path in output_paths:
            output.save(path, "WEBP")
            print(f"Saved circular image to: {path}")
            
    except Exception as e:
        print(f"Error: {e}")

# Paths
input_file = r"C:\Users\sikan\Desktop\WebP\xx.webp"
output_files = [
    r"c:\Users\sikan\Desktop\New folder (2)\Modern-Store\app\icon.webp",
    r"c:\Users\sikan\Desktop\New folder (2)\Modern-Store\public\icon.webp",
    r"c:\Users\sikan\Desktop\New folder (2)\Modern-Store\public\apple-icon.webp",
     r"c:\Users\sikan\Desktop\New folder (2)\Modern-Store\public\logo-v3.webp"
]

make_circle(input_file, output_files)
