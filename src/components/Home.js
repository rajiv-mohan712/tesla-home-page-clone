import React from "react"
import Section from "./Section"

function Home() {
  return (
    <div className='parent'>
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        leftButton='Custom order'
        rightButton='Existing Inventory'
        bgImage='model-s.jpg'
        arrowFlag='true'
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        leftButton='Custom order'
        rightButton='Existing Inventory'
        bgImage='model-y.jpg'
      />
      <Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        leftButton='Custom order'
        rightButton='Existing Inventory'
        bgImage='model-3.jpg'
      />
      <Section
        title='Model X'
        description='Order Online for Touchless Delivery'
        leftButton='Custom order'
        rightButton='Existing Inventory'
        bgImage='model-x.jpg'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back guarantee'
        leftButton='Custom order'
        rightButton='Existing Inventory'
        bgImage='solar-panel.jpg'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
        leftButton='Custom order'
        rightButton='Existing Inventory'
        bgImage='solar-roof.jpg'
      />
      <Section
        title='Accessories'
        leftButton='Shop now'
        bgImage='accessories.jpg'
      />
      {/* test */}
    </div>
  )
}

export default Home
