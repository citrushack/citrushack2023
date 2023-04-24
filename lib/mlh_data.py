import csv
from pymongo import MongoClient

columns = ['First Name', 'Last Name', 'Age', 'Email', 'School', 'Phone Number', 'Country', 'Current Level of Study', 'Code of Conduct', 'Privacy Policy', 'Marketing Opt-In']

def get_mlh_data(client):
    db = client['Development']  
    users = db['users']

    with open('mlh_data.txt', 'w') as file:
        file.write(','.join(columns))

        for user in users.find():
            # only parse qualified applicants
            if user.get('qualified') == 'yeah':
                file.write('\n')
                # name
                if user.get('name'):
                    file.write(user.get('name').get('first')+',')
                    file.write(user.get('name').get('last')+',')
                else:
                    file.write(',')
                # age
                file.write(user.get('age')+',')
                # email
                file.write(user.get('email')+',')
                # school
                if user.get('school') == 'Other':
                    school = user.get('school_other')
                else:
                    school = user.get('school')
                file.write(school.replace(',','')+',') # some schools have commas so remove it
                # Phone
                file.write(user.get('phoneNumber')+',')
                # Country (filled out in checkin form)
                if user.get('country'):
                    file.write(user.get('country')+',')
                else:
                    file.write('US,')
                # study level
                file.write(user.get('grade')+',')
                # checkboxes
                if user.get('MLHAcknowledgement') == True: # if true, then all 3 checked
                    for i in range(3): file.write('true,')
                else: # only the 2 required boxes filled; (marketing opt in not checked)
                    for i in range(2): file.write('true,')
                    file.write('false,')



                

def text_to_csv(input_file, output_file):
    # Read the input text file
    with open(input_file, 'r') as txt_file:
        data = txt_file.readlines()
    
    # Write the data to a CSV file
    with open(output_file, 'w', newline='') as csv_file:
        csv_writer = csv.writer(csv_file)
        for row in data:
            # Split the row using the comma separator and remove any leading/trailing whitespaces
            csv_writer.writerow([cell.strip() for cell in row.split(',')])

if __name__ == "__main__":   
    CONNECTION_STRING = "mongodb+srv://minsooerickim:0aOvW6KR6Zy7HkIR@development.jek65.mongodb.net/?retryWrites=true&w=majority"
    client = MongoClient(CONNECTION_STRING)

    get_mlh_data(client)
    text_to_csv('mlh_data.txt', 'mlh_data.csv')