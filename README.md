# sejutacita_app

### Local
- Make sure you have installed MongoDB on your local
- Clone this repository into your local repository `git clone https://github.com/tsaqifrazin1/sejutacita_app.git`
- Run `npm install` => `cd sejutacita_app` => `node server.js`
- Create .env file with
  
  * ##### .env
    JWT_SECRET = \<secret for accessToken>\
    REF_TOKEN_SECRET = \<secret for refreshToken>\
    PORT= \<port>\
    DB_URI= <`mongodb://localhost:27017/user` for local> \
   
 - If you get `Connected to the Database successfully` 
  you good to go
  
### Kubernetes
 - you can use `deploy.yaml` file to deploy in Kubernetes\
 - run `kubectl create -f deploy.yaml` => `kubectl expose deployment sejutacita-app --type="LoadBalancer"`
 - get external ip address using `kubectl get svc`

### Direct use
 `http://34.101.253.199:3000`
 
   ###### Admin credential
       {
          "email" : "admin@mail.com",
          "password" = "12345678"
       }
### API Documentation
   You can use Postman collection and Postman environment for testing this API
   
### Flow chart
* #### Public
   - ##### Register flow 
      `/api/v1/user/register`
      
      ![sejuta cita register](https://user-images.githubusercontent.com/72601006/168108496-7b5dfd62-38ea-4628-95ae-036f496e8209.jpg)
      #
   - ##### Login flow
      `/api/v1/user/login`
      
      ![sejutacita-login](https://user-images.githubusercontent.com/72601006/168108889-3676cd3b-da62-416c-86ea-83c187a8baa7.jpg)
      #
    - ##### Refresh Token Flow
       `/api/v1/user/refresh`
      
      ![sejutacita-refreshtoken](https://user-images.githubusercontent.com/72601006/168109983-c270a0f0-ad3d-4f05-ad99-6c23571d2929.jpg)
      #
* #### User 
   - ##### Get user (me) flow
       `/api/v1/user/profile/:_id`
      
      ![sejutacita-readone](https://user-images.githubusercontent.com/72601006/168109151-4f9f6c23-2f8f-4da5-8098-cbbdb17f3d34.jpg)
      #
   - ##### Logout flow
       `/api/v1/user/logout/:_id`
      
      ![sejutacita-logout-logout](https://user-images.githubusercontent.com/72601006/168110312-5d788634-34a0-43e2-97d2-b24378ba07f8.jpg)
      #
 * #### Admin (can access all endpoint)
   - ##### Get All User
      `/api/v1/user/list`
      
      ![sejutacita-readalluser](https://user-images.githubusercontent.com/72601006/168112076-06e22917-4441-4fdb-a1c4-74e2b79cea3e.jpg)
      #
   - ##### Update User
      `/api/v1/user/update/:_id`
      
      ![sejutacita-updateuser](https://user-images.githubusercontent.com/72601006/168112367-825a115c-2e52-4538-bce4-20f2f680ea7a.jpg)
      #
   - ##### Delete User
      `/api/v1/user/delete/:_id`
      
      ![sejutacita-delete user](https://user-images.githubusercontent.com/72601006/168112712-c11ad27d-32df-4215-9ec1-ba970956634f.jpg)
      #
      
