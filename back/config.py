class Config(object):
    DEBUG = True
    #SQLALCHEMY_DATABASE_URI = 'sqlite:///data.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    UPLOAD_FOLDER_BASE_TONALS = './static/base_tonals/'
    UPLOAD_FOLDER_SKIN_IMAGES = './static/skin_images/'
    BASE_URL = 'http://localhost:5000'


