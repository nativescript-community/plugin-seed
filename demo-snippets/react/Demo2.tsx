import * as React from 'react';

export function Demo2() {
    return (
        <stackLayout>
            <label>This is the second demo</label>
            <label text="This image is from the shared assets directory." />
            <image src="~/image.png" />
        </stackLayout>
    );
}
