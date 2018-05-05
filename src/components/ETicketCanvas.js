import React, { Fragment } from 'react'

import Barcode from 'jsbarcode'
import ETicketImage from 'eticket.jpg'

export default class ETicketCanvas extends React.PureComponent {

    constructor(props) {
        super(props)
        this.image = new Image()
        this.image.src = ETicketImage
    }

    drawBarCode(barcode) {
        const { full } = this.props
        const canvas = document.getElementById(`eticket${!full? '-preview':''}`)
        const width = canvas.width
        const height = width / 2
        const ctx = canvas.getContext('2d')
        ctx.drawImage(this.image,0,0, width, height)
        ctx.save()
        ctx.translate(width / 2, height / 2);
        ctx.rotate(3 * Math.PI /2)
        ctx.drawImage(barcode, -width / 4, 9 * width / 40, width / 2, width * 100 / 362 )
        ctx.restore()
    }

    loadBarcodeData(nextProps) {
        const { full, no } = nextProps
        if (no) {
            const barcode = document.getElementById(`barcode${!full? '-preview':''}`)
            barcode.onload = () => this.drawBarCode(barcode)
            Barcode(`#barcode${!full? '-preview':''}`, no, {format: "code39"})
        }
    }

    componentWillReceiveProps(nextProps) {
        this.loadBarcodeData(nextProps)
    }

    render() {
        const { width, full } = this.props
        return (
            <div className='columns'>
                <Fragment>
                    <div className='column'>
                        <canvas id={`eticket${!full? '-preview':''}`} width={`${width}px`} height={`${width/2}px`} />
                    </div>
                    <div className='column'>
                        <img id={`barcode${!full? '-preview':''}`} alt='barcode' />
                    </div>
                </Fragment>   
            </div>
        )
    }
}