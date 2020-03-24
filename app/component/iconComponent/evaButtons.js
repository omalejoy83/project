import React from 'react'
import{Icon, Button} from '@ui-kitten/components';
const EvaButtons = (Prop)=>(
    <Button icon={(style)=><Icon name={Prop.iconName?Prop.iconName:""}  {...style}/>}>
        {Prop.text?Prop.text:''}
    </Button>

)
export default EvaButtons