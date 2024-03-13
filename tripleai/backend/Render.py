from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit, join_room, leave_room
import os
from flask_cors import CORS
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'
CORS(app)
socketio = SocketIO(app, cors_allowed_origins='*')

# Store code data
code_data = {}

# @socketio.on('connect')
# def handle_connect():
#     print('Client connected')
#
#
# @socketio.on('disconnect')
# def handle_disconnect():
#     print('Client disconnected')
#
#
# @socketio.on('join_room')
# def handle_join_room(data):
#     room_id = data['room_id']
#     join_room(room_id)
#     emit('room_joined', {'message': 'Joined room ' + room_id}, room=room_id)
#
#
# @socketio.on('leave_room')
# def handle_leave_room(data):
#     room_id = data['room_id']
#     leave_room(room_id)
#     emit('room_left', {'message': 'Left room ' + room_id}, room=room_id)
#
#
# @socketio.on('update_code')
# def handle_update_code(data):
#     room_id = data['room_id']
#     code = data['code']
#     code_data[room_id] = code
#     emit('code_updated', {'code': code}, room=room_id)
#
#
# @app.route('/get_code', methods=['POST'])
# def get_code():
#     room_id = request.json['room_id']
#     code = code_data.get(room_id, '')
#     return jsonify({'code': code})
#
# @app.route("/search",method = ['Post'])
# def find():
#     pass
@app.route("/videos")
def find():
    List = ['https://www.youtube.com/watch?v=7lmCu8wz8ro', 'https://www.youtube.com/watch?v=JKCjsRDffXo', 'https://www.youtube.com/watch?v=7eh4d6sabA0','https://www.youtube.com/watch?v=HkdAHXoRtos']
    return jsonify({"data":List})
if __name__ == '__main__':
    socketio.run(app, debug=True)
