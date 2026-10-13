import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService){}
    
    //menampilkan data atau mengambil data
    @Get()
    getAllBooks() {
        //logi untuk mengambik smeua data buku dari service
        return this.booksService.findAll();
    }

    //mengambil data buku berdasarkan id
    @Get(':id')
    getBookById(@Param('id') id: string) {

        //logika untuk mengambil data buku berdasarkan id dari database
        return this.booksService.findOne(Number(id));
    }

    @Post()
    createBook(@Body() book: CreateBookDto){
        //logic untuk menyimpan data buku baru ke database
        return this.booksService.create(book);
    }

    //mengupdate data buku berdasarkan id
    @Put(':id')
    updateBook(@Param('id') id: string, @Body() book: CreateBookDto){
    
        //logic untuk mengupdate data buku berdasarkan id di database
        return this.booksService.update(Number(id), book);
        
    }

    @Delete(':id')
    deleteBook(@Param('id') id: string) {
        //logic untuk menghapus data buku berdasarkan id di database
        return this.booksService.delete(Number(id));
    }
}



