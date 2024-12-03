/*
// pages/content.js
import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

// Пример данных для таблицы
const videoData = [
    {
        id: 1,
        title: 'My First Video',
        description: 'This is a description of my first video.',
        views: 1200,
        likes: 150,
        dislikes: 10,
        thumbnail: '/path/to/thumbnail1.jpg',
    },
    {
        id: 2,
        title: 'Another Great Video',
        description: 'Description of another great video.',
        views: 4500,
        likes: 300,
        dislikes: 20,
        thumbnail: '/path/to/thumbnail2.jpg',
    },
];

export default function ContentPage() {
    const [openFilterDialog, setOpenFilterDialog] = useState(false);
    const [filters, setFilters] = useState({
        copyright: '',
        ageRestriction: '',
        audience: '',
        access: '',
        title: '',
        description: '',
        views: '',
    });

    const handleOpenFilterDialog = () => {
        setOpenFilterDialog(true);
    };

    const handleCloseFilterDialog = () => {
        setOpenFilterDialog(false);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value });
    };

    const applyFilters = () => {
        // Логика для применения фильтров
        console.log(filters);
        handleCloseFilterDialog();
    };

    return (
        <div>
            <h1>Контент на канале</h1>
            <Button variant="outlined" startIcon={<FilterListIcon />} onClick={handleOpenFilterDialog}>
                Фильтр
            </Button>

            {/!* Таблица видео *!/}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Картинка</TableCell>
                            <TableCell>Название</TableCell>
                            <TableCell>Описание</TableCell>
                            <TableCell>Просмотры</TableCell>
                            <TableCell>Лайки</TableCell>
                            <TableCell>Дизлайки</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {videoData.map((video) => (
                            <TableRow key={video.id}>
                                <TableCell>
                                    <img src={video.thumbnail} alt={video.title} width="100" />
                                </TableCell>
                                <TableCell>{video.title}</TableCell>
                                <TableCell>{video.description}</TableCell>
                                <TableCell>{video.views}</TableCell>
                                <TableCell>{video.likes}</TableCell>
                                <TableCell>{video.dislikes}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/!* Диалог фильтрации *!/}
            <Dialog open={openFilterDialog} onClose={handleCloseFilterDialog}>
                <DialogTitle>Фильтры</DialogTitle>
                <DialogContent>
                    {/!* Фильтры: авторские права *!/}
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Авторские права</InputLabel>
                        <Select
                            name="copyright"
                            value={filters.copyright}
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="">Нет</MenuItem>
                            <MenuItem value="claimed">Заявлены</MenuItem>
                            <MenuItem value="notClaimed">Не заявлены</MenuItem>
                        </Select>
                    </FormControl>

                    {/!* Фильтры: возрастные ограничения *!/}
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Возрастные ограничения</InputLabel>
                        <Select
                            name="ageRestriction"
                            value={filters.ageRestriction}
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="">Нет</MenuItem>
                            <MenuItem value="ageRestricted">Есть ограничения</MenuItem>
                        </Select>
                    </FormControl>

                    {/!* Фильтры: аудитория *!/}
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Аудитория</InputLabel>
                        <Select
                            name="audience"
                            value={filters.audience}
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="">Любая</MenuItem>
                            <MenuItem value="children">Детская</MenuItem>
                            <MenuItem value="adults">Взрослая</MenuItem>
                        </Select>
                    </FormControl>

                    {/!* Фильтры: доступ *!/}
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Доступ</InputLabel>
                        <Select
                            name="access"
                            value={filters.access}
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="">Все</MenuItem>
                            <MenuItem value="public">Открытые</MenuItem>
                            <MenuItem value="private">Приватные</MenuItem>
                        </Select>
                    </FormControl>

                    {/!* Фильтры: название *!/}
                    <TextField
                        name="title"
                        label="Название"
                        value={filters.title}
                        onChange={handleFilterChange}
                        fullWidth
                        margin="dense"
                    />

                    {/!* Фильтры: описание *!/}
                    <TextField
                        name="description"
                        label="Описание"
                        value={filters.description}
                        onChange={handleFilterChange}
                        fullWidth
                        margin="dense"
                    />

                    {/!* Фильтры: просмотры *!/}
                    <TextField
                        name="views"
                        label="Просмотры"
                        value={filters.views}
                        onChange={handleFilterChange}
                        fullWidth
                        margin="dense"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseFilterDialog}>Отмена</Button>
                    <Button onClick={applyFilters}>Применить</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
*/
