import ETicketCanvas from 'components/ETicketCanvas'
import Form from 'components/Form'
import React from 'react'

export default class Body extends React.PureComponent {

    state = {
        seatNo: '0000'
    }

    inputNo = (seatNo) => this.setState({ seatNo })

    save = () => {
        const image = document.getElementById('eticket').toDataURL("image/png").replace("image/png", "image/octet-stream")
        const download = document.getElementById("download")
        download.setAttribute('href', image)
    }

    render() {
        const { seatNo } = this.state
        return (
            <div className='container'>
                <section className='section'>
                    <h1 className='title'>Input</h1>
                    <Form inputNo={this.inputNo} save={this.save} no={seatNo} />
                </section>
                <section className='section'>
                    <h1 className='title'>Preview</h1>
                    <ETicketCanvas width={300} no={seatNo} />
                </section>
                <section className='section'>
                    <h1 className='title'>Hi-Res</h1>
                    <ETicketCanvas width={1810} no={seatNo} full />
                </section>
            </div>
        )
    }
}
