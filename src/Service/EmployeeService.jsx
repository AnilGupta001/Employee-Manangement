import axios from 'axios'

const URL='http://localhost:9090/emp';

class EmployeeService{
save(employee){
    return axios.post(URL,employee)
}
getEmp(){
    return axios.get(URL)
}
 delete(id){
    return axios.delete(URL+"/"+id);
 }
 update(id, firstName, lastName, email) {
    return axios.put(`${URL}/${id}`, {
        firstName: firstName,
        lastName: lastName,
        email: email
    });

}
getEmpbyid(id){
    return axios.get(URL+"/"+id);
}
}
export default new EmployeeService;