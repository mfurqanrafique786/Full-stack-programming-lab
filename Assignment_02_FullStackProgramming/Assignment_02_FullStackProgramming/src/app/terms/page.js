import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'

export default function Terms() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Payments', href: '/payment' }, { label: 'Terms and Conditions' }]} />
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>Terms and Conditions for Sale</h1>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '2px', fontSize: '12px', color: '#555', lineHeight: '1.8' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px', color: '#333' }}>General Terms and Conditions</h2>
          <p style={{ marginBottom: '16px' }}>General Terms and conditions for Business, Payment and Delivery for Hot tubs and Spas</p>

          {[
            {
              title: '1. Interpretation',
              content: `In these conditions of sale:\n'the Company' means The Edge (Systems) Limited\n'the Buyer' means the person or firm or Company ordering, buying, hiring or being loaned goods from the Company.\n'the Goods' means the goods or the services, the subject matter of the relevant order, contract for sale, hire or loan (including any part or parts of them).\n'the Contract' any contract between the Company and the Buyer for the sale and purchase of the goods incorporating these conditions.`
            },
            {
              title: '2. Risk and title',
              content: `a) The risk in the products will pass to the customer as soon as they are delivered to the customer\nb) The Edge will remain the sole and absolute owner of the goods until full payment for them has been received. Until such payment has been received the buyer will hold the goods for The Edge as fiduciary bailee and will store them at its premises separately from its own products or those of any other person and in a manner which makes them identifiable as products of The Edge\nc) When payment for the products is overdue or the buyer suffers distress or execution to be levied against its effects, makes an arrangement or composition with creditors or, being a corporate body enters into liquidation or has an administrator or receiver appointed for the whole or any part of its undertaking, or being an individual has a receiving order and bankruptcy made against them then\nd) If the buyer remains in possession of the goods, whether or not they have sold them, the Edge shall be entitled to recover the goods from`
            },
            {
              title: '3. Charges',
              content: `a) All prices advertised are subject to VAT which is payable in addition by the buyer\nb) The Edge reserves the right to amend prices as and when necessary and in the case of errors on prices the right to rescind any order and credit back to the buyer any payment received.`
            },
            {
              title: '4. Payment',
              content: `a) Payment is to be by credit/debit card or cheque, please note that cheques will need to clear before despatch of the goods will be made.\nb) Credit accounts are available to buyers who have completed an Account Application form and that application has been satisfactorily accepted by The Edge. The Edge's decision on this will be final. Payment terms for credit accounts are strictly net monthly and The Edge reserves the right to charge interest at 3% per annum above Barclays Bank PLC Base Rate as amended from time to time and will be charged on a daily basis on overdue accounts calculated from the date payment is due until receipt of the payment by The Edge.`
            },
            {
              title: '5. Delivery',
              content: `a) All published delivery timescales are subject to availability. The Edge will not be liable for any failure to deliver within published timescales this includes loss of interest, revenue or goodwill, or any payments due to a third party in excess of the cost of replacing damaged or defective goods.\nb) Delivery costs are in addition to the published prices and will be added at checkout stage\nc) In the event of any damage to the goods upon delivery the buyer must notify The Edge within three working days of delivery and must sign the carriers delivery documentation as damaged; this allows us to claim back from the carrier's insurance policy and then enables us to reimburse the buyer.`
            },
            {
              title: '6. Force Majeure',
              content: `Neither party shall have any liability to the other for any failure or delay in performing its obligations due to any circumstances wholly or partly beyond its control, such circumstances shall include but not be limited to fire, flood, power failure, mechanical failure, lack or shortage of materials, strike, lockout or any other industrial action.`
            },
            {
              title: '7. Refunds',
              content: `The Edge will refund any goods which are supplied providing the goods are returned to us in their original condition and packaging in a resaleable state within 14 days of delivery. Delivery charges will not be refunded under any circumstances.`
            },
            {
              title: '8. General',
              content: `a) No modification or amendment of these terms and conditions shall be valid unless agreed in writing and signed by the duly authorised Representative of both parties.\nb) All contracts are to be subject to English law`
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>{section.title}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: '40px' }} />
      <Footer />
    </div>
  )
}
