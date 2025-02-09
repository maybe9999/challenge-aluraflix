import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { BasePage } from '../Pages/BasePage';
import { Home } from '../Pages/Home';
import { NewVideo } from '../Pages/NewVideo';
import { NotFound } from '../Pages/NotFound';

import { VideoProvider } from '../Contexts/VideoProvider';
function AppRoute() {
    return (
        <BrowserRouter>
            <VideoProvider>
                <Routes>
                    <Route path='/' element={<BasePage />}>
                        <Route index element={<Home />} />
                        <Route path='/new-video' element={<NewVideo />} />
                        <Route path='/*' element={<NotFound />} />
                    </Route>
                </Routes>
            </VideoProvider>
        </BrowserRouter>
    )
}

export default AppRoute