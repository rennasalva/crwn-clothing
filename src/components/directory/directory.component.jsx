import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import {connect} from "react-redux";
import './directory.styles.scss'
import {directorySection} from './../../redux/directory/directory.selector'
import {createStructuredSelector} from "reselect";


const Directory = ({sections})=> (
            <div className="directory-menu">
                {
                    sections.map(
                        /*({title,imageUrl,id,size, linkUrl}) =>(
                            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                        )*/
                        ({id,...otherSctionParams}) =>(
                            <MenuItem key={id} {...otherSctionParams} />
                        )
                    )
                }
            </div>
        );

const mapStateToProps =createStructuredSelector({
    sections:directorySection
});

export default connect(mapStateToProps,null)(Directory);