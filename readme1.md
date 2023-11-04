// hum logo ko kaafi saara kaam karna padta hai express setup krne main iska matlab har baar jab hum naya project banaayenge to har baar fir se utna hi kaam krna padega, matlab ki poora code likho and sab kuchh setup karo, is time ko bacha sakte ho with help of express generator, use express generator and it will make the folder structure for you and it will also write the basic code for the project


// express generator ek folder bana ke deta hai, jiska matlab aapko khudse folder nahi banana hai, to express generator saare files ko ish folder main daal ke dega,


// steps to use exxpress generator
// sabse pahle jeevan main ek baar laptop par install karo globally
// npm i express-generator -g

// to create new app anywhere
// open cmd move to desktop
// create new app :
// express appname --view=ejs


// now use two commands
// cd appname
// npm i
// open it on vs code



--------------- MONGODB -------------------
                Diagram
Code Side                     MongoDB Side
DB setup                      DB Formation
Model                         collection
schema                        Documents

--- Data base ---
har naye app ka data store hoga storage main, par usey directly rakne ki jagha ek container main rakhega, us container main sirf us app ka data aayega


----Model----
models (code) => collection (db)


---- schema ----
// schema (code) => documents (db)

// ek app ka poora data => (db)

// ek app main variety of data hota hai par poora data hota app ka hi hai, par us data ka sub category kehlaata hai collection

// collection matlab ki bola users ka data, ek user pe baat kri to huaa document



// Install mogodb
// install mongoosejs
// require and setup connection
// make schema
// create model and export

