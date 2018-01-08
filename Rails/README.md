1.
Neu chay lenh: ` $rails server` thi se chay bat ki 1 server rails nao do trong may. Neu trong 1 may , cai nhieu version rails thi co the dan den tao app 1 version, run server 1 version khac.
Tot hon nen chay `$bin/rails server`


2. Tao 1 project Rails
bin/rails generate scaffold ModelName attribute1:type attribute2:type ...

3. 
The controller receives the request, loads the requested data via the model, and then inserts that data into the view in order to render a response.

4.Rails console: 
  4.1.Read model objects
    - bin/rails console
    - Post.all 
    - Post.find(3) #Select...where id=3
  4.2.Create Model objects
    - post = Post.new(....)
    - post.save
  4.3.Update Model objects
    - post  Post.find(1)
    - post.title = "New title"
    - post.save
  4.4.Delete Model Objects
    - post = Post.find(1)
    - post.destroy

5. Updating the Model
$ bin/rails generate migration AddBodayToPosts body:text