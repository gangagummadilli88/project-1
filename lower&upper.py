def checkpalin(num):
    return str(num)==str(num)[::-1]
lowerlimit = int(input("enter lower limit :"))
upperlimit = int(input("enter upper limit :"))
for i in range(lowerlimit,upperlimit+1):
    if checkpalin(i):
        print(i, " ")
