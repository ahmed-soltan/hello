import {useState} from 'react'
import UseFireStore from '../../firebase/UseFireStore'
import DashboardHeader from '../../Components/DashboardHeader/DashboardHeader'
import DashboardProducts from '../../Components/dashboardProducts/DashboardProducts'
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import DashboardMessages from '../../Components/dashboardMessages/DashboardMessages'
const Dashboard = () => {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
    const {products , messages} = UseFireStore()
  return (
        <div style={{minWidth:"100%" , padding:"0 10px"}}>
        <DashboardHeader messages={messages} products={products} />
        <div className='container my-5'>
      <MDBTabs pills className='mb-3 '>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'} className='text-black'>
            Products
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'} className='text-black'>
            Messages
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}><DashboardProducts products={products} /></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}><DashboardMessages messages={messages} /></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </div>
        
      </div>
  )
}

export default Dashboard