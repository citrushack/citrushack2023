import csv
import os

from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

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

def get_mongo_client():
    CONNECTION_STRING = os.environ.get("CONNECTION_STRING_DEV")
    client = MongoClient(CONNECTION_STRING)
    return client