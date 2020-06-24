suite('division', () => {
    benchmark(
        'JavaScript (1 division)',
        () => {
            // eslint-disable-line no-undef
            this.values.map((value) => value / this.divisor);
        },
        {
            setup: () => {
                const length = 5000000;

                // Generate values between 0 and 1.
                this.divisor = Math.random() - Math.round(Math.random());
                this.values = new Float32Array(length);

                for (let i = 0; i < length; i += 1) {
                    this.values[i] = Math.random() - Math.round(Math.random());
                }
            },
            teardown: () => {
                delete this.divisor;
                delete this.values;
            }
        }
    );

    benchmark(
        'JavaScript (10 divisions)',
        () => {
            // eslint-disable-line no-undef
            for (let i = 0; i < 10; i += 1) {
                this.values.map((value) => value / this.divisor);
            }
        },
        {
            setup: () => {
                const length = 5000000;

                // Generate values between 0 and 1.
                this.divisor = Math.random() - Math.round(Math.random());
                this.values = new Float32Array(length);

                for (let i = 0; i < length; i += 1) {
                    this.values[i] = Math.random() - Math.round(Math.random());
                }
            },
            teardown: () => {
                delete this.divisor;
                delete this.values;
            }
        }
    );

    benchmark(
        'Web Audio API (1 division)',
        (deferred) => {
            // eslint-disable-line no-undef
            const offlineAudioContext = new OfflineAudioContext(1, this.values.length, 44100);
            const valuesBuffer = offlineAudioContext.createBuffer(1, offlineAudioContext.length, offlineAudioContext.sampleRate);
            const valuesBufferSource = offlineAudioContext.createBufferSource();

            valuesBuffer.copyToChannel(this.values, 0);
            valuesBufferSource.buffer = valuesBuffer;

            const divisorGain = offlineAudioContext.createGain();

            divisorGain.gain.value = this.divisor;

            valuesBufferSource.start(0);

            valuesBufferSource.connect(divisorGain).connect(offlineAudioContext.destination);

            offlineAudioContext
                .startRendering()
                .then((renderedBuffer) => renderedBuffer.copyFromChannel(this.values, 0))
                .then(() => deferred.resolve());
        },
        {
            defer: true,
            setup: () => {
                const length = 5000000;

                // Generate values between 0 and 1.
                this.divisor = Math.random() - Math.round(Math.random());
                this.values = new Float32Array(length);

                for (let i = 0; i < length; i += 1) {
                    this.values[i] = Math.random() - Math.round(Math.random());
                }
            },
            teardown: () => {
                delete this.divisor;
                delete this.values;
            }
        }
    );

    benchmark(
        'Web Audio API (10 divisions)',
        (deferred) => {
            // eslint-disable-line no-undef
            const offlineAudioContext = new OfflineAudioContext(1, this.values.length, 44100);
            const valuesBuffer = offlineAudioContext.createBuffer(1, offlineAudioContext.length, offlineAudioContext.sampleRate);
            const valuesBufferSource = offlineAudioContext.createBufferSource();

            valuesBuffer.copyToChannel(this.values, 0);
            valuesBufferSource.buffer = valuesBuffer;

            valuesBufferSource.start(0);

            let chain;

            for (let i = 0; i < 10; i += 1) {
                const divisorGain = offlineAudioContext.createGain();

                divisorGain.gain.value = this.divisor;

                if (chain === undefined) {
                    chain = valuesBufferSource.connect(divisorGain);
                } else {
                    chain = chain.connect(divisorGain);
                }
            }

            chain.connect(offlineAudioContext.destination);

            offlineAudioContext
                .startRendering()
                .then((renderedBuffer) => renderedBuffer.copyFromChannel(this.values, 0))
                .then(() => deferred.resolve());
        },
        {
            defer: true,
            setup: () => {
                const length = 5000000;

                // Generate values between 0 and 1.
                this.divisor = Math.random() - Math.round(Math.random());
                this.values = new Float32Array(length);

                for (let i = 0; i < length; i += 1) {
                    this.values[i] = Math.random() - Math.round(Math.random());
                }
            },
            teardown: () => {
                delete this.divisor;
                delete this.values;
            }
        }
    );
});
