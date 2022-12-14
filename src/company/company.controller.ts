import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService) {}

    @Post()
    createCompany(@Body() body: CreateCompanyDto) {
      this.companyService.create(body.legalName, body.emailAddress)
    }
    
    @Get('/:id')
    async findCompany(@Param('id') id: number) {
      const user = await this.companyService.getById(id);
      if (!user){
        throw new NotFoundException('company not found')
      }
      return user;
      }
  
    @Get()
    findAllCompany(@Query('legalName') legalName: string){
      return this.companyService.find(legalName);
    }
  
    @Patch('/:id')
    updateCompany(@Param('id') id: string, @Body() body: UpdateCompanyDto) {
      return this.companyService.update(parseInt(id), body)
    }
}
