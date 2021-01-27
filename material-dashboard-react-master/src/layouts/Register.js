import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Register() {

    const [company, setCompany] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [postalCode, setPostlCode] = useState("")
    const [aboutMe, setAboutMe] = useState("")
    const [error, setError] = useState("")

    const classes = useStyles();


    function validateForm() {
        return userName.length > 0 && password.length > 0 &&
        company.length > 0 && firstName.length > 0 && lastName.length > 0 &&
        email.length > 0 && city.length > 0 && country.length > 0 &&
        postalCode.length > 3;
      }

    function sendRegister(event){
        event.preventDefault()
        fetch("/api/users/register", {
            method: "POST",
            body: JSON.stringify({ 
                userName: userName,
                password: password,
                company: company,
                firstName: firstName,
                lastName: lastName,
                email: email,
                city: city,
                country: country,
                postalCode: postalCode,
                aboutMe: aboutMe
            }),
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.text())
        .then(data => setError(data))

    }
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' ,  height: '80vh'}}>
    <form onSubmit={sendRegister}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Regsiter Page</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Company"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                        value:company,
                        onChange:e => setCompany(e.target.value)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="User Name"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                        value:userName,
                        onChange:e => setUserName(e.target.value)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Password"
                    id="username"
                    formControlProps={{
                      fullWidth: false
                    }}
                    inputProps={{
                        value:password,
                        onChange:e => setPassword(e.target.value)
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                        value:email,
                        onChange:e => setEmail(e.target.value)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                        value:firstName,
                        onChange:e => setFirstName(e.target.value)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: false
                    }}
                    inputProps={{
                        value:lastName,
                        onChange:e => setLastName(e.target.value)
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                        value:city,
                        onChange:e => setCity(e.target.value)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                        value:country,
                        onChange:e => setCountry(e.target.value)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                        value:postalCode,
                        onChange:e => setPostlCode(e.target.value)
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value:aboutMe,
                      onChange:e => setAboutMe(e.target.value),
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button type="submit" disabled={!validateForm()} color="primary">Submit</Button>
            </CardFooter>
            <CardFooter>
              <p>{error}</p>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      </form>
    </div>
  );
}
