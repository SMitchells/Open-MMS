class WSCredentials{
    //Private credentials, token Moodle and rest api link.
    #URL = 'http://3.88.157.89/moodle/webservice/rest/server.php'
    #TOKEN = '1e9b86bb88863a73c36becada75c42f7'

    constructor(){
        //this.getUserCourses
    }

    //Returned rest URL host.
    //get url(){return this.#URL}

    //Objects with arguments.
    webService = {
        token: {
            'wstoken': this.#TOKEN
        },
        url: this.#URL
    }
}

module.exports = new WSCredentials()