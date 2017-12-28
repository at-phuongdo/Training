array = ["milk", "eggs", "bread", "eggs"]

p array.length #4

p array.count #4

#Neu co truyen tham so vao ham count, thi se dem so phan tu bang tham so

p array.count("eggs") #2

p array.include?("eggs") #true

p array.first

p array.last

p array[-1]

##############################################3
#Method FETCH
p array.fetch(2)  #bread

#Neu doi so trong fetch vuot qua length se dan den bao loi. De tranh truong hop do
#co the dung them doi so thu 2, neu vuot qua length, default se tra ve doi so thu 2

p array.fetch(20, "ahihi")


