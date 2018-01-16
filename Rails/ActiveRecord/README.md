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

#4. Has Many Through Associations


#5.Render partial
```
  <% @post.comments.each do |comment| %>
    <%= render partial: "comments/comment", locals: {comment: comment} %>
  <% end %>
```

```
 <%= render partial: "comments/comment", collection: @post.comments, as: :comment %>
 ```

 ```
   <%= render partial: "comments/comment", collection: @post.comments %>
 ```

```
  <%= render @post.comments %>
```

#6. Nested routes and Resources
```
  resources :posts do
    resources :comments
  end
```






