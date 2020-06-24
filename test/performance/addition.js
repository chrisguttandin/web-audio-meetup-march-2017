suite('addition', () => {
    benchmark(
        'JavaScript (1 addition)',
        () => {
            // eslint-disable-line no-undef
            this.values.map((value) => value + this.summand);
        },
        {
            setup: () => {
                const length = 5000000;

                // Generate values between 0 and 1.
                this.summand = Math.random() - Math.round(Math.random());
                this.values = new Float32Array(length);

                for (let i = 0; i < length; i += 1) {
                    this.values[i] = Math.random() - Math.round(Math.random());
                }
            },
            teardown: () => {
                delete this.summand;
                delete this.values;
            }
        }
    );

    benchmark(
        'JavaScript (10 additons)',
        () => {
            // eslint-disable-line no-undef
            for (let i = 0; i < 10; i += 1) {
                this.values.map((value) => value + this.summand);
            }
        },
        {
            setup: () => {
                const length = 5000000;

                // Generate values between 0 and 1.
                this.summand = Math.random() - Math.round(Math.random());
                this.values = new Float32Array(length);

                for (let i = 0; i < length; i += 1) {
                    this.values[i] = Math.random() - Math.round(Math.random());
                }
            },
            teardown: () => {
                delete this.summand;
                delete this.values;
            }
        }
    );

    benchmark(
        'Web Audio API (1 addition)',
        (deferred) => {
            // eslint-disable-line no-undef
            const offlineAudioContext = new OfflineAudioContext(1, this.values.length, 44100);
            const valuesBuffer = offlineAudioContext.createBuffer(1, offlineAudioContext.length, offlineAudioContext.sampleRate);
            const valuesBufferSource = offlineAudioContext.createBufferSource();

            valuesBuffer.copyToChannel(this.values, 0);
            valuesBufferSource.buffer = valuesBuffer;

            const summandArray = new Float32Array([this.summand]);
            const summandBuffer = offlineAudioContext.createBuffer(1, 1, offlineAudioContext.sampleRate);
            const summandBufferSource = offlineAudioContext.createBufferSource();

            summandBuffer.copyToChannel(summandArray, 0);
            summandBufferSource.buffer = summandBuffer;
            summandBufferSource.loop = true;

            valuesBufferSource.start(0);
            summandBufferSource.start(0);

            valuesBufferSource.connect(offlineAudioContext.destination);
            summandBufferSource.connect(offlineAudioContext.destination);

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
                this.summand = Math.random() - Math.round(Math.random());
                this.values = new Float32Array(length);

                for (let i = 0; i < length; i += 1) {
                    this.values[i] = Math.random() - Math.round(Math.random());
                }
            },
            teardown: () => {
                delete this.summand;
                delete this.values;
            }
        }
    );

    benchmark(
        'Web Audio API (10 additions)',
        (deferred) => {
            // eslint-disable-line no-undef
            const offlineAudioContext = new OfflineAudioContext(1, this.values.length, 44100);
            const valuesBuffer = offlineAudioContext.createBuffer(1, offlineAudioContext.length, offlineAudioContext.sampleRate);
            const valuesBufferSource = offlineAudioContext.createBufferSource();

            valuesBuffer.copyToChannel(this.values, 0);
            valuesBufferSource.buffer = valuesBuffer;

            valuesBufferSource.start(0);

            valuesBufferSource.connect(offlineAudioContext.destination);

            for (let i = 0; i < 10; i += 1) {
                const summandArray = new Float32Array([this.summand]);
                const summandBuffer = offlineAudioContext.createBuffer(1, 1, offlineAudioContext.sampleRate);
                const summandBufferSource = offlineAudioContext.createBufferSource();

                summandBuffer.copyToChannel(summandArray, 0);
                summandBufferSource.buffer = summandBuffer;
                summandBufferSource.loop = true;

                summandBufferSource.start(0);

                summandBufferSource.connect(offlineAudioContext.destination);
            }

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
                this.summand = Math.random() - Math.round(Math.random());
                this.values = new Float32Array(length);

                for (let i = 0; i < length; i += 1) {
                    this.values[i] = Math.random() - Math.round(Math.random());
                }
            },
            teardown: () => {
                delete this.summand;
                delete this.values;
            }
        }
    );
});
