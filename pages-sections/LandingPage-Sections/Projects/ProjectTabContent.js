import React from "react";
// nodejs library that concatenates classes
import cls from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productContentStyle.js";

const useStyles = makeStyles(styles);

export default function ProjectTabContent({ data }) {
    const classes = useStyles();
    const imageClasses = cls(
        classes.imgRaised,
        classes.imgFluid,
        classes.imgRounded,
    );
    return (
        <div>
            <GridContainer justify="center">
                { data.map(item => (
                    <GridItem key={item.id} xs={12} sm={6} md={4}>
                        <Card plain>
                            <GridItem xs={12} className={classes.itemGrid}>
                                <img src={item.img} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                {item.title}
                                <br />
                                <small className={classes.smallTitle}>{item.skill}</small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                    {item.description}
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-github"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-facebook"} />
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                ))}
            </GridContainer>
        </div>
    )
}
