led.enable(false)
pins.digitalWritePin(DigitalPin.P16, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
basic.forever(function () {
	
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, pins.analogReadPin(AnalogReadWritePin.P1))
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 500) {
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        while (pins.digitalReadPin(DigitalPin.P3) == 0) {
            basic.pause(1000)
        }
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
})
