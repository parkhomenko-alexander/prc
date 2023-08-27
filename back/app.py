from flask import Flask
from config import Config
from flask_cors import CORS


from blueprints.base_tonals.base_tonals_bp import base_tonals_bp
from blueprints.color_matcher.color_matcher_bp import color_matcher_bp



app = Flask(__name__)
app.config.from_object(Config)

CORS(app)


# db.init_app(app)
# migrate = Migrate(app, db)
# with app.app_context():
#     db.create_all()

app.register_blueprint(base_tonals_bp, url_prefix='/base_tonals')
app.register_blueprint(color_matcher_bp, url_prefix='/color_matcher')

