import os
import csv
import json
from collections import OrderedDict

if not os.path.isdir(os.path.dirname(__file__)+'/../app/data'):
    os.mkdir(os.path.dirname(__file__)+'/../app/data')

fout = open('../app/data/data.json', 'w+')

with open('legislators-current.csv', 'r') as f:
    reader = csv.reader(f)

    all_rows = []

    header = next(reader)

    for row in reader:
        all_rows.append(OrderedDict(zip(header, row)))

    print json.dump(all_rows, fout)
    f.close()
    fout.close()
