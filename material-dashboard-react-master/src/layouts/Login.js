import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
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


function Login (){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const classes = useStyles()
 

    function validateForm() {
      return username.length > 0 && password.length > 0;
    }

    function handleLogin(event){

        fetch("/Login", { 
              
        method: "POST", 
        
      body: JSON.stringify({ 
          username: username,
          password: password, 
      }), 
        
      headers: { 
          "Content-type": "application/json; charset=UTF-8"
      } 
      }) 
    }
    return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' ,  height: '80vh'}}>
      <form onSubmit={handleLogin}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Login Page</h4>
            </CardHeader>
            <CardBody>
            
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                  inputProps = {{
                    value:username,
                    onChange:e => setUsername(e.target.value) 
                }}
                    labelText="User Name"
                    id="User-Name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    inputProps = {{
                        type:"password",
                        value:password,
                        onChange:e => setPassword(e.target.value)
                    }}
                    labelText="Password"
                    id="UserName"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              
            </CardBody>
            <CardFooter>
            <Button type="submit" disabled={!validateForm()} vcolor="primary">Login</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      </form>
    </div>
            
    )
}


export default Login