from flask import Blueprint, request, jsonify
from config import Config
import os, glob
from core.avg import skin_color, generate_palette, generate_color

color_matcher_bp = Blueprint('color_matcher_bp', 
                    __name__)

@color_matcher_bp.route('/upload_skin_photos', methods=['POST'])
def upload_skin_photos():
    #!
    files_path = (os.path.dirname(os.getcwd()) + '/dpl/back/static/skin_images/').replace('\\', '/')
    files = glob.glob(files_path+'*')
    for f in files:
        os.remove(f)
    
    print(files)
    files = request.files.getlist('files')
    files_links = []
    if files:
        for file in files:
            path = os.path.join(files_path, file.filename)
            files_links.append(Config.BASE_URL+path[28:])
            file.save(path)
    #! 
    # files = request.files.getlist('files')
    
    # files = glob.glob(f'{Config.UPLOAD_FOLDER_SKIN_IMAGES}*')
    # for f in files:
    #     os.remove(f)
    
    # files = request.files.getlist('files')

    # print(files)
    # files_links = []
    # if files:
    #     for file in files:
    #         path = os.path.join(Config.UPLOAD_FOLDER_SKIN_IMAGES, file.filename)
    #         files_links.append(Config.BASE_URL+path[1:])
    #         file.save(path)

    return (jsonify('succesfully'), 200)


@color_matcher_bp.route('/get_skin_color', methods=['GET'])
def get_skin_color():
    skin_col=skin_color()
    return (jsonify(skin_col), 200) 

@color_matcher_bp.route('/generate_palette', methods=['GET'])
def gen_palette():
    palette=generate_palette()
    return (jsonify(palette), 200)



@color_matcher_bp.route('/match_color', methods=['GET'])
def match_color():
    skin_col = skin_color()
    palette = generate_palette()
    amount = [0]*len(palette)
    amount_per = [0]*len(palette)
    res = generate_color(palette, skin_col, amount, amount_per)
    amount_col = res[1]
    # amount_col[0] = 0.8
    # amount_col[1] = 0.2
    print(skin_col, res[0], res[1], res[3])
    return (jsonify(skin_col=skin_col, tonal_col=res[0], palette=res[2], amount=res[1] ), 200) 