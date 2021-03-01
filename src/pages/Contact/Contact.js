import React from "react";
import { Grid, TextField } from "@material-ui/core";
import  "./Contact.css";


const Contact = () => {
  return (
    <Grid container className="section pt_45 pb_45">
      {/* contact form */}
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Contact Form</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="name" label="name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="email" label="name" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="message" label="Message" multiline row={4}/>
              </Grid>
              <Grid item xs={12} >
                <TextField fullWidth name="name" label="name" />
              </Grid>
              <button className="contact-button" text="Submit" value="Send" >Submit</button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* contact info */}
      <Grid item xs={12} lg={5}></Grid>
    </Grid>
  );
};

export default Contact;
