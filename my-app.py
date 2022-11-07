from flask import Flask, request
app = Flask(__name__)

@app.route('/bookinglist')
def get_names():

    namelist = []
    datefromlist = []
    datetolist = []
    phonelist = []

    with open("data.txt","r") as fisier:
        linii_fisier=fisier.readlines()
        for linie in linii_fisier:
            extras = linie.split(',')
            namelist.append(extras[0])
            datefromlist.append(extras[1])
            datetolist.append(extras[2])
            phonelist.append(extras[3])
        return {
            "name": namelist,
            "datefrom": datefromlist,
            "dateto": datetolist,
            "phone": phonelist,
            }
                
        

@app.route('/booknow', methods=["POST"])
def save_contact_message():

    nume = request.form["nume"]
    datefrom = request.form["datefrom"]
    dateto= request.form["dateto"]
    phone= request.form["phone"]

    with open("data.txt", "a+") as fisier:
        fisier.write (f"{nume},{datefrom},{dateto},{phone}\n")
    
    return {
        "success": True,
        "confirmation": "Thank you for you submission!"
    }           
      


@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response


if __name__ == "__main__":
    app.run(debug=True)


