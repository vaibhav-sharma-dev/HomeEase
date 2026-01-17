import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';

export const sequelizeConfig = (
  configService: ConfigService,
): SequelizeModuleOptions => {
    const databaseUrl = configService.get<string>('DATABASE_URL');

    if (!databaseUrl) {
        throw new Error('DATABASE_URL is not defined');
    }

    return {
        dialect: 'postgres',
        uri: databaseUrl,

        autoLoadModels: true,
        synchronize: false, // OK for now, disable later

        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },

        logging:
        configService.get('NODE_ENV') === 'development'
            ? console.log
            : false,
    };
};