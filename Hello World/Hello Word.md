
#### `11-1-25`

# HTML - Hello World

> NOTE :
> - We understanding base(foundation) `without code` then we write good code significantly.
> - Computer means `Transfering information form 1 side to other side`.
<br>

### Jargon in computer -
Example through website `https://hiteshchoudhary.com/` & What's reason that website is so simple? - becz of, learning base from that understood easily.
<br>

#### Q. What can we learn in details?
  - How to computer find?
  - Behind the sence how to work?
  - How to my computer find that website from in world-wide other websites?
<br>

#### Perspective of learning -
- How to does website make fancy? How these technology?  What's that technology? these are `timewasting things`...
- We learn only that how its working `behind the scenes`. That are understand in level of 0's & 1's.
- That things we easily understand, then any other tech like GraphQL, API, Server, MongoDB, mySQL these are easily understood.
<br>

## HTTP - Hypertext Transfer Protocol

> NOTE :
> - All things of computer are not came from computer, that are came from `real world`, thats things are so common in real world.

- Protocol : `Set of rules`.
- Transfer : `Moving from 1 side to other side`.
- Hyertext : `It means only text documents that points another documents`.
    
- Beginning of internet that time scientist work as only share <b>Text files</b> among ourselves.
  - E.g. that reels send between me & my friend.
- Hypertext means -> that have only <b>text documents</b> but, that <b>text document that shares links that points another documents</b>.
- One such document that includes hyperlinks or hypertext that will be taking out form that document. i.e. work only of <b>hypertext</b>.
- Beginning time only share text(image sharing not present that time) with reference document that show learn link to learn other document.
  - E.g. like wikipedia(without images).
<br>

- Protocol making time they insure it can be `Human Readable`.
- All data sends from HTTP all are `Readable`.
- All data we can seen becz, in protocol as mention that `data` for `Readable`.

#### Human Readable data access through :
  - 1] Network tab visibility
  - 2] Inspect element
  - 3] Page source
<br>

### Stateless Protocol

- HTTP as `Stateless Protocol`

#### State : means `Maintain state`
  - E.g. as game checkpoint, amazon/netflix movie watching pause & we continue from that pause time. i.e. is  `Maintain state`.

#### Stateless : `Not maintain state`
  - Everytime we visit a page, they consider we are a new user.
    - E.g. we can open youtube in "incognito mode"(as country wise set youtube videos visible as same) becz, we have no any reference/preference, no any account logined, if youtube doesn't change its alogorithm. i.e. `Stateless Protocol`.
  - In `Stateless Protocol -> no any memory of "previous request"`.
    - E.g. We visit 10 times, everytime we can view same page.

#### Q. If we say, HTTP as a Stateless Protocol then, How does possible to create our account? How to possible bookmark in youtube? How does are possible?
- In `HTTP` -> `There is no such rule for maintain state`. Neither is its in today's date nor should it be.
- HTTP -> `Protocol/Rules`
  - E.g. HTTP simply work that, from one side computer "sent request" to server & computer get "respose from server". That our `HTTP`.
- We can send web request & we get back web response. i.e. work of HTTP. But. that is not sufficient.
<br>

> NOTE : Computer scientist think that, the web is advancing & introduce images in web that's celebrating movement & big acheivement in the web.
<br>


### Session

#### Q. How to store a state?
- After HTTP we need of session.
  - E.g. Doctor appointment with you(that give time only for you), Session teacher with you i.e. Real world example we can store our information at session.
- `Session` can `stored our state`.
-  Session work simple have to `remember intraction between browser & server` in the format of `Cookie`.
-  E.g. name = hitesh <- that is also cookie.
- `Cookie` -> Key value pairs. It is just a information.
- `Information`or`Cookie` also can be send by browser to server or also send by server to browser.
  - E.g. No cookie came from sever side or not send cookie by browser i.e. Not get any information. 

#### Q. What types of information on cookie?
<br>

### HTTP Headers 
- `Headers` : Whenever browser can send info that called Headers. i.e. `headers means information`.
- What type of information can send by HTTP Headers :
  - `Client` : Who is the client?
  - `Browser` : Who is the browser?
  - `Date & Time` : What is date & time?
  - `Cookie to store` : Do you want to keep stor cookie or not?
  - E.g. That are questions, client have ask questioning stored in client, Browser info that login from safari or chrome...

#### What will I do after knowing these information?
- E.g. We knowing you login from safari, then we give popups as "Please download our IOS app." Or We login form android, them we give popup as "Please download our Android app." i.e. `good usecases`.
- E.g. We also show ads.
  - Traveling time we search best hotel in ways, ads suggest best hotels are in budget.
-  All informations of `HTTP Headers` are store on server & it came from client.
<br>

### Request - Response Model
- That simply as, broswer send resquest to web server & server return reponse to browser. i.e. `Request - Response Model`.
- Browser send `HTTP Headers` information & same `HTTP Headers` information can server send to browser.
  - E.g. Browser carries some information like Who am I?, What is my OS?, Which one is my browser?, When I request send?... also that tye of info server can send to browser like You were talking about this website, Take this website.

#### Q. Response is a cookie?
- In response may or may not be contain a cookie.
- May be in response cookie are send or may be not send a cookie in response.
- High chance to send cookie while sending response.

#### `Request`
Type of Request - 
- The request can be of many types like Get, Post, Delete...
- It is also important to know that what type of request browser can send to sever.
- Get(give the data) request
  - E.g. we go to -> https://hiteshchoudhary.com/ our browser `GET Request` send to https://hiteshchoudhary.com/ `server` for get the data of this website.
- Delete request
  - E.g. Our browser can send request as `delete request` with headers(all information of user & also some cookies, references) correct to twitter server for delete some content.
 
#### `Response`
- After we send get request to server then `server responsiblity as send response to browser`. like 200, 404, 500...
- Server how to know for all world wide website 404 means "Not Found" becz of, `Protocols(standards)`.
- Rule are set while request send to server(That type of request only can send) similarly, some rules are defined for server or defined standards.
  - E.g. Browser send GET request then server response "200" code or other code.
All known as `softeares`.

### Computer general things while response send to browser -
- 1] `What action to perform` GET, POST...
  - It shows what work as delete or post or send some one or get me back that called as `Verb` -> GET, POST... and other types of request.
- 2] `Where to perform` http://api/hitesh.ai/auth
   - It show where location we can send request. i.e. some URL.
- 3] `After was it done` 200, 404...
  - That send response to browswer whatever defined as rule.

> NOTE : All in web development we learned that 3 general things only.
<br>


## HTTP/2 (HTTP version 2) - Hypertext Transfer Protocol 2

> NOTE :
> - That our web 100% traffic, that of `80% of traffic` are run on our `HTTP/2`.
> - HTTP/2 or HTTP version 2 is one of the most powerful version.
> - `HTTP version 2` thats are not any connection related between Web3.
> - `Web3 is only a marketing term`(Its shows only grater number or version than 2 only).
> - We take seen `web3 as only term of new technology(new pprotcol or new set of tool) not as web enhancement`.

#### HTTP/1 -
- After data transfering done through `HTTP` the version introduce after is that `HTTP version 1`.
- No any important thing in that version 1.
- HTTP/1 -> `Only send one request & get 1 response only.`
- Majorly update of HTTP/1 is `we can send only imgage`(That time CSS not exists).
- Image we can send that major part of `HTTP/2` or HTTP version 2.
- But after HTTP/2 work that also working of HTTP/1.
- Currently HTTP/1 also active working as much as working of HTTP/2.
<br>

> NOTE :
> - HTTP/1 work as fallback or backup or substitude of HTTP/2.
> - HTTP/2 fallback also live still as HTTP/1.
> - In many places today, HTTP/2 type requests can't be served.
> - HTTPS/1 -> are not release publicly directly realease HTTP/1.1 version.  
<br>

#### HTTP/2 -
- HTTP/2 is enhance version of HTTP/1.
- Big enhancement in HTTP/2 is -> we create file with multiple dependencies like images or there styling & things... thats `in single time all are load in HTTP/2`.
- In one request HTTP/2 shared all required file to server.
- HTTP/2 use `Multiplexing` -> send multiple file at same time.
- HTTP/2 use `Compression` -> E.g. zoom also used Compression.
  - E.g. - task as implement graph we required system data has huge data & that all data we convert into a data.
    - Server can compress data & send compress data i.e. zip, gzip... That all move to our browser & expand it & create graph.
    - That all possible bcz, `exsisting of HTTP/2`.
- HTTP/2 showcasing 14 million customer transaction in single page. i.e. very big graph.
- HTTP/2 use `Encryption` -> i.e. in format of `HTTPS`.
- `Encryption` i.e. ABC as -> KYC. Real meaning of data we can hide & receiver can only knowing meaning of that code word.
- In AWS we don't use HTTPS for internal communication.

#### Q. Why `AWS not used HTTPS` for internal communication?
  - Internal commuincation we send encrypted data( ABC as -> KYC ) to server & Server convert encrypted data ( KYC to -> ABC ).
  - While internal working AWS give compute cost or calculate every cost on thing we work on it.
  - Internal N/W are not introduced for public only internal.


> NOTE :
> -  Encryption also have protocol bcz, In computer every thing have protocol.
> -  Big companies for internal communication they don't use HTTPS.
<br>

#### HTTPS = `HTTP + TLS`
- HTTPS is only marketing emic.
- TLS : `Transport Layer Security`
- While communication between browser & server with encyption way i.e. ABC as -> KYC. That communication proof required i.e. `cert.` or certificate.
- Exchange that certification as proof of communication.
- `cert.` -> as agreement means its certificate.

#### User Agent (Browser)
  - TCP : Transmission Control Protocol
  - FTP : FIle Transfer Protocol
  - IP : Internet Protocol
  - URL : Uniform Resource Locator
  - DNS : Domain Name System Server (Point URL to IP)
  - Header : Pass additional Information

- `User Agent` -> that's agent can send request to server.
- That no matter browser is only User Agent bcz, information also send through code or send through browser or terminal.
- `User Agent` means that send information or `its work as user for server`.
  
#### `TCP` : Transmit data.
- We are on browser side transmision means "data send to server" & on server side transmision means "data send to user".
- Thats data transmision gives some rules. that for controling information, where to send information...

#### `FTP` : Send information like mp3, mp4, csv(excel file), pdf...

#### `IP` : Every computer gives name i.e. IP.
- E.g. My computer name is 'Raju bhai' i.e. not proper naming in internet world when ever data transmission.
- Internet world our `machine gives name with internet protocol`.

#### `URL` : is only jargon word of 'Link'.
- Locator -> Which track location
- Resource -> Which is mp4 or mp3
- Uniform -> It uniformaty to show same at every time
- `URL` in future we called as `End point`.

#### `DNS` : Its point URL to 'IP'.
- E.g. `https://hiteshchoudhary.com/` our info on server i.e. also it provide by AWS or google or our home inhouse server.
- That is only a `machine` we also store home server.
- E.g. When we try to call from phone which can we inform you i.e. Contacts app.
- `DNS is internet contacts` is same work as phone contacts. bcz, through contact also we can remove or add work.

#### `Header` : Pass `Additional Information`
- Header called information or mata data.
- E.g. Card holder are made up with metal i.e. Additional inforamtion of card means `Header`.

#### `Payload` : Actual data - Email, Password
- E.g. In our browser we can login in linked In with filling email, password & click on login button. That login button whos click safari or chrome thats about info are going to header.
- Whos browser click on login button that information `no any direcct use` that info called `Header`.
- `Payload` -> But, payload is actual that use on sever majorly i.e. our `payload`.
- E.g. We can load & pickup sofa's from factory & send to client. payload is sofa & driver, pickup are headers.

#### `Cache` : Store the data
- `Cache` -> Temporary storage
- E.g. In our facotry clients not came any client to buy product then, we create showroom that helful for client i.e. showroom is temporary storage means `Cache`.
<br>

### Summary of upcoming all time work -
- `Browser/Client & Server` are also be a run on computer o& they are also be a S/W.
1] Protocol setup - Brwoser can send request & server give response to browser  i.e. `setup of TCP connection`. & other also connection like UDP, text specialize connection, media specialize connection.
2] Exchange TLS certificate - TLS certificate is our HTTPS.
3] Send data to verb + URL + more info of headers - verb is get, post, delete that send to link means URL & more info of header like which is browser, whats our IP...
4] Gets the response back - Server also a responsiblity with status code & data(Img, CSV, text).
5] TCP connection is closed (stateless).
<br>

> NOTE :
> - We can work as how to send request to server, how many type throgh send request, how access data. i.e. our `whole web or S/W`.
> - This include databases that we can store also, cache, web sokets, WEBRTC, API, GRAPHQL.. i.e. our S/W development.
> - `Cookie & Cache have not any similarities`, Cookie is like key value pair that can store our in backend.
>   - `Cookie` E.g. Facebook use HTTPS it not include state. we login can't login every time facbook after we visit or reload i.e. that facbook know user have login using `cookie`.
>   - In cookies having session information.
>   - `Cache` E.g. In our facebook after login we shows 10 friend request, over all in facebook millions of users then every time we search that 10 friend request user from millions of user that finding is not easy. 1st time compute it from millions of user, but not possible serach from millions user for every reload or refresh.
>   - That cache data temporary i.e. `Cache` things.
<br>


