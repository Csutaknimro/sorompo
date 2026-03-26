led.enable(false)
pins.digitalWritePin(DigitalPin.P16, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, pins.analogReadPin(AnalogReadWritePin.P1))
    if ((0 as any) < (500 as any)) {
    	
    }
})
