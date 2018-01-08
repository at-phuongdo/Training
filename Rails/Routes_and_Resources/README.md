#1.Creating a Route
```
get '/pages', to: 'pages#index'`
```

#2.Creating controller
```
$bin/rails generate controller Pages
$bin/rails destroy controller Pages
```

#3.Creating a view
> Format: index.html.erb


#4.Creating a Model
  ```
  $bin/rails generate model Page [title:string body:text,...]
  ```
  #Populating the view
  - Display the output verbatim
  > <p> My name is Phuong </p>
  - The result in <%=%> is embedded into the output 
  > <p>The current time is: <%= Time.now %></p>
  - Text with conditional
  ``` <% grade = 97 %>
  <% if grade > 60 %>
  You passed!
  <% end %>
  ```
  - Text with loop
  ```
  <% 4.times do |index| %>
    <p><%= index %> fish</p>
  <% end %>
  ```
  - Assuming @pages contains a collection of Page objects
  ```
  <% @pages.each do |page| %>
    <p>
      <%= page.title %>
    </p>
  <% end %>
  ```

#5.Linking to Pages
> <%= link_to "link text", "/link/path" %>
> <%= link_to page.title, "/pages/#{page.id}" %>

#6.Path Helpers
  routes.rb 
  > get 'pages/:id', to: 'pages#show', as: 'page' #helper method
  index.html.erb
  > <%= link_to page.title, page_path(page) %>
  > <%= link_to page.title, page %>


#7.Finding a page
> render text: params[:id]

>@page = Page.find(params[:id])
>render text: @page

#8.Create a Show View
>app/views/pages/show.html.erb

#9.View new page
```
<%= form_for(@pet) do |f| %>
  <%= f.label :name %>
<% end %>
```

#10. Create pages
```
def create
  page_params = params.require(:page).permit(:title, :body, :slug)
  @page = Page.new(page_params)
  @page.save
  redirect_to @pet
end
```

#11.Edit pages
>get 'pages/:id/edit', to: 'pages#edit'

#12.Partial form (_form.html.erb)

#13.Update pages
>patch '/pages/:id', to: 'pages#update'

#14.Delete pages
>delete '/pages/:id', to: 'pages#destroy'

```
def destroy
  @page = Page.find(params[:id])
  @page.destroy
end
```

><%= link_to 'Delete', @page, method: :delete %>


#15.Rails resouce
>resources :pages

#16.Filter
```
before_action :set_page, except: [:index, :new, :create]
or
before_action :set_page, only: [:show, :edit, :update, :destroy]
```
```
def set_page
  @page = Page.find(params[:id])
end
```

