#1. Has many Association
```
class Post < ApplicationRecord
  has_many :comments
end
```
>post = Post.first 
>post.comments 

##Create a comment:
```
comment = post.comments.build
comment.conent = ""
comment.save
```
or 
```
post.comment.create(content: "")
```

#2. Belongs to Associations
```
class Comment < ApplicationRecord
  belongs_to :post
end
```

#3. Has and belongs to many Associataions
```
class User < ApplicationRecord
  has_and_belongs_to_many :forums
end

class Forum < ApplicationRecord
  has_and_belongs_to_many :users
end

```

