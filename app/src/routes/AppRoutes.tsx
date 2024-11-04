import { Route, Routes } from 'react-router-dom';

import { CreateNotePage, MainLayout, NoteListPage } from '../pages';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<NoteListPage />} />
				<Route path="create-note" element={<CreateNotePage />} />
			</Route>
		</Routes>
	);
};
