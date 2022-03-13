from io import BytesIO
import requests
from PIL import Image

res = requests.get("https://guaijie.ml/images/logo.png")
# open()函数打开一个图片对象，这里借助BytesIO直接读取图片，也可以传入文件路径读取本地文件
img = Image.open(BytesIO(res.content))  
crop_img = img.crop((0, 0, 512, 128))  # 裁剪掉上下各500像素
crop_img.show()  # 显示图片
