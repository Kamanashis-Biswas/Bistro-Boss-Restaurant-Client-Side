/**
 * ----------------
 * BASIC
 * ----------------
 * 1. do not show the link to them who shound not see it
 * only show to the person/types of user who should see it
 * 2. do not allow to visit the link by typing on the url
 * use adminRoute that will check whether the user is admin or not and send them to the login page as well.
 * ----------------
 * TO SEND  DATA
 * ----------------
 * 1. verify jwt token(send authorization token in the header to server)
 * If possible to use axios to send jwt by intercepting the request
 * 2. if it is an admin activity. make sure only admin user is postion data 
 * by using verifyAdmin
 * 
 * 
 * 
 * 
 * * */