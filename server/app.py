from config import app

@app.route( '/' )
def root_route():
    return 'meow'


if __name__ == '__main__':
    app.run(port = 5555, debug = True)