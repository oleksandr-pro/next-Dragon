import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Stars from "@material-ui/icons/Stars";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import {USER} from "../../constants";

const useStyles = makeStyles(styles);

export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}> ABOUT </h2>
          <h5 className={classes.description}>
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          { USER.characters.map((item, index) => (
              <GridItem xs={12} sm={6} md={3} key={item.title}>
                <InfoArea
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    iconColor="info"
                    vertical
                />
              </GridItem>
          ))}

        </GridContainer>
      </div>
    </div>
  );
}
