# abn-search-rwd-react-redux
Created with CodeSandbox

##### abn-search-rwd-react-redux is a responsive frontend integrated with the [JSON](https://abr.business.gov.au/json/) APIs of Australian Business Register ([ABR](https://abr.business.gov.au/)). It provides access to publicly available information supplied by businesses when they register for an Australian Business Number (ABN).

### [Demo on CodeSandbox](https://ll29r2qqvq.codesandbox.io/)

**Start Development Server**
```
git clone https://github.com/nandral/abn-search-rwd-react-redux.git
cd abn-search-rwd-react-redux
npm install
npm start
```

#### Methodlogies followed / modules used

* `React`  JavaScript library for building user interfaces
* `react-router-dom` for client-side routing
* [styled-components](https://www.styled-components.com/) allows you to write actual CSS code to style React components
* `redux` for managing application state
* `react-saga` for handling redux app side effects
* [fetch-jsonp](https://www.npmjs.com/package/fetch-jsonp) for calling [ABR JSON APIs](https://abr.business.gov.au/json/) 
* `enzyme` for unit testing of React components
* [redux-saga-test-plan](https://www.npmjs.com/package/redux-saga-test-plan) makes testing sagas a breeze


**Responsive Web Design principles are applied throught out, so that web page rendering is consistent and the content is legible across Desktop, Tablet, Mobile**

**Desktop View**
![desktop](https://lh3.googleusercontent.com/V6ODY8vImcca7IN1FsLbjKudj_Smjx5503c448Qqame22IIPzAX2hJRN--171bMTXqlzJFl4xvnXQZAxW0c94jG2zODO9HELx8JHN-rykg02MVUHKSUlA28b6A1LsJUOLmWUdZuCOiXjEzsbeLZq0vtrhCzKtwaTPma3uB3E8TuIyCpMNuXT5Wv5vT8v_7kA1aN19W84lISJH6UCTiQT29eHhcwq4dohyU8aRWFLqWBPFKiLl-uP8Q2GjThMQUBHK2C7kOcO2dkTHXDdRfDcyUIHnnUNyhWJ3xyu8QNIOph18Iy53gIkOMHJ4x0BRN1ZWnO9YuGCagv0GQiEn6qx12LaSBF7iBQgaBIjKaY_22XqZ2sZn_oiaxh4nBEDu2kBMb7F-vgk0baGcOPWku0VZWr55Z1b9Uzlu-Nwtn0VtUxHxIAFH2hC8SjQbH4C5vAQxDGWrWGnAx9Ws6LD05pj31_cQdge_Q-4M0J685OZPYstwTZwecb48qEl0hehR4q0hcNc1NtM829WLdxICXc2Vc_SfEVDFpEviiTpxRBjaVuoP853eY5M616PyNB4o8jSRGHNbqzrI0kKj9XxZgqeeFv84jwo3WtRn7iTMMqvkNsTVyMU8Q5RX1NLvRSSLkj3v4bIKP2jbX5hK-IO12dSKZua6RKi_SrcwM9KlQ7IlysGrPT01yw7LTR4TTgPdR9MtpWLpqZsTZENhk5adw=w2528-h1580-no)

**Tablet View**
![](https://lh3.googleusercontent.com/-I_ZuS51f5aSxXURsI1Th8C3lCjGlK4GU96yTynDZwGgSRJjUSbn4QArLm1XbB1NX85LeIKZKEf8CeR3JosN1jio8NNF3NwiFy8neDraUzV1gjK65h_Rvto2KyfOqfl7yPlTEA_3VYcQreZCmoUqouEXynuSA8hqdxXvNXLueAKnHcaGLUlLwe2dMyc-x4mdOv4Obbi9MNjd_dk07meJvbDFWyCPUgbhg0AR7K5BH4FLmdSaNPs_dRoGhdkebM6pZ3qVruvi96tzUJhWBWI-Oat_MqCmmT922XqrIHqTDupf_kz6BULz3nEs-gvDdV7AP6diipA5BKJ_kROcz2KmHrG8q01Gi22wIwyL7p4PivwLB89mpeXECmTTPgUBHyziSHT91SsoIjowhPP7yPbQaEAFq3T_ksZvtuVw1PFoGYQ7Ps6Ji4_X6DyRHAYPpnDs44RHefoNqfy_aYRRfUNHdbWxgSLYR7Jx441OhL50VoXYr1kVv3ihY0jo3-DuZ05yQS0DnZFPqBa-W0JHX--W2o4aQGzQS-uoNZJCrRy3fShia7Q-fXajn0UY3gvHD5iheTHlafcBADcYQTnaqjYUpDpFxku-usqja23UCrdR_9eihvddCdIoQHa7OQUMMEou0hWj_Y0uQCeuEZEBrzKqupxnpRhQijXIO8SUOSXmP8YLsPgU79X9vRvcjkC8WmSonVeXKr36-tvdNmgaww=w1604-h1460-no)

**Mobile View**
![](
https://lh3.googleusercontent.com/hgqnzIFGqvd3ZixaVHUECcNQp28IjwsMM-nf1Gv04a2FUVrZU2HDQLgyevgiBGCtfLEKux2nKHevt2GQWt8L9YPYtJGO2cE2hZ5x1Cq9srb7sxhTTaHkDaMqEmlsrRCWSsbCYc7iOTu_se0UikUz-05kpzkBHtXJOCV_UcZpgNj-zC3JxuaW79XcnKkVg3ACUDRPB96gRA8ckks_-SLeffiTj9y9qLWYSbuqS2bAGpxLvtJmwY-KtTzHFEmPReruCdZnOziMTjb0kRpGLrMhjZColsr0Gb6PuVntlwbxIOuwyRzhkpfaTdQsA9NO1EMhBn9EsLPiSK1lgZd8fuAe4U4mBu9dlOW6JABfnEOBv0mBhu1UFwU75Si4aQZ-Ux7eHo4B0R-_Nnve0DOMRJAt8Fzn4fr3SWPamHPn-vnFevYDs_TMUI67v7Kk1p4NW9xmLfMqWebDBHv9F9UNBlPQgNG1-VeqZR2XzyD8xWRmthYSSR66ynvGg-vaglDFGUp1iJkIdWM8i9ABX8eAEh_gy6sQCgz414C-hMWck7J27Ig6yIWYNrQL1Boh5p1VQ6BvhMEfo4NP_zwopMpvrAJnC_bcb6n-EJrQ_cymfhwYMUYHxrB5kCfFklOCO94D5SxazTCQ_eZH6iXXqvzYVLbwTx-Tsm2XVizQZLXd9-gUa7qVhbMI9u8_bC3fDgEkkdo0KUVo_vc70YxSwFFKzA=w844-h1430-no
)


