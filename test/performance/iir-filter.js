suite('irrFilter', () => {

    benchmark('JavaScript', () => { // eslint-disable-line no-undef
        const results = [ this.values[0] * (this.feedforward[0] * this.feedback[0]) ];

        for (let i = 1; i < this.values.length; i += 1) {
            results[i] = (this.values[i] * this.feedforward[0] * this.feedback[0]) - this.values[i - 1] + (results[i - 1] * this.feedforward[1] * this.feedback[1]);
        }
    }, {
        setup: () => {
            const length = 5000000;

            // Generate values between 0 and 1.
            this.feedback = new Float32Array([
                Math.random() - Math.round(Math.random()),
                Math.random() - Math.round(Math.random())
            ]);
            this.feedforward = new Float32Array([
                Math.random() - Math.round(Math.random()),
                Math.random() - Math.round(Math.random())
            ]);
            this.values = new Float32Array(length);

            for (let i = 0; i < length; i += 1) {
                this.values[i] = Math.random() - Math.round(Math.random());
            }
        },
        teardown: () => {
            delete this.feedback;
            delete this.feedforward;
            delete this.values;
        }
    });

    benchmark('Web Audio API', (deferred) => { // eslint-disable-line no-undef
        const offlineAudioContext = new OfflineAudioContext(1, this.values.length, 44100);
        const valuesBuffer = offlineAudioContext.createBuffer(1, offlineAudioContext.length, offlineAudioContext.sampleRate);
        const valuesBufferSource = offlineAudioContext.createBufferSource();

        valuesBuffer.copyToChannel(this.values, 0);
        valuesBufferSource.buffer = valuesBuffer;

        const iirFilter = offlineAudioContext.createIIRFilter(this.feedback, this.feedforward);

        valuesBufferSource.start(0);

        valuesBufferSource
            .connect(iirFilter)
            .connect(offlineAudioContext.destination);

        offlineAudioContext
            .startRendering()
            .then((renderedBuffer) => renderedBuffer.copyFromChannel(this.values, 0))
            .then(() => deferred.resolve());
    }, {
        defer: true,
        setup: () => {
            const length = 5000000;

            // Generate values between 0 and 1.
            this.feedback = new Float32Array([
                Math.random() - Math.round(Math.random()),
                Math.random() - Math.round(Math.random())
            ]);
            this.feedforward = new Float32Array([
                Math.random() - Math.round(Math.random()),
                Math.random() - Math.round(Math.random())
            ]);
            this.values = new Float32Array(length);

            for (let i = 0; i < length; i += 1) {
                this.values[i] = Math.random() - Math.round(Math.random());
            }
        },
        teardown: () => {
            delete this.feedback;
            delete this.feedforward;
            delete this.values;
        }
    });

});
