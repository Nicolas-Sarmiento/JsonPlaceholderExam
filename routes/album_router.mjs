import express from 'express';
import {
    get_all_albums,
    get_album_by_id
} from '../controll/album_controll.mjs'

const router = express.Router();

router.get('/', get_all_albums);
router.get('/:id', get_album_by_id);


export default router;