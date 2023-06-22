import './App.css'

import {i18n} from '@lingui/core'
import {I18nProvider} from '@lingui/react'
import {Trans} from '@lingui/macro';

async function dynamicActivate(locale: string) {
    const {messages} = await import(`./locales/${locale}.po`);

    i18n.loadAndActivate({locale, messages})
}

dynamicActivate('en');

function App() {
    const markAsRead = () => {
        alert('Marked as read.')
    }

    return (
        <I18nProvider i18n={i18n}>
            <Trans>
                See all {<a href="/unread">unread messages</a>}{" or "}
                <a onClick={markAsRead}>mark them</a> as read.
            </Trans>
        </I18nProvider>
    )
}

export default App
