from utility import text_to_csv, get_mongo_client

# hackers who ate canes (name, email, sid)
columns = ['First Name', 'Last Name', 'Email', 'SID']

def get_canes_eaters(client):
    db = client['Development']  
    users = db['users']

    with open('canes.txt', 'w') as file:
        file.write(','.join(columns))

        for user in users.find():
            # only parse qualified applicants
            if user.get('qualified') == 'yeah':
                file.write('\n')

                if user.get('pickedUpCanes'):
                    file.write(user.get('name').get('first')+',')
                    file.write(user.get('name').get('last')+',')

                    file.write(user.get('email')+',')

                    if user.get('ucr_sid'):
                        file.write(user.get('ucr_sid')+',')
                    else:
                        file.write(user.get('non-ucr hacker'))

if __name__ == "__main__":   
    try:
        client = get_mongo_client()
        get_canes_eaters(client)
        text_to_csv('canes.txt', 'canes.csv')
    except:
        print('something went wrong, try again')